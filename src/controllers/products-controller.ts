import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import z from "zod";

class ProductsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query;
      const products = await knex<ProductRepository>("products")
        .whereLike("name", `%${name ?? ""}%`).select()

      return response.json({ products })
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "name is required" }).trim().min(6),
        price: z.number({ required_error: "price is required" }).gt(0, { message: "value must be greater than 0" })
      })

      const { name, price } = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").insert({ name, price })

      response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {

      const id = z.string().transform((value) => Number(value)).refine((value) => !isNaN(value), { message: "Id must be a number" }).parse(request.params.id)

      const bodySchema = z.object({
        name: z.string({ required_error: "name is required" }).trim().min(6).optional(),
        price: z.number({ required_error: "price is required" }).gt(0, { message: "value must be greater than 0" }).optional()
      })

      const { name, price } = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").update({ name, price, updated_at: knex.fn.now() }).where({ id })

      return response.status(200).json({ id, message:"Product updated."})
    } catch (error) {
      next(error)
    }
  }
}

export { ProductsController }