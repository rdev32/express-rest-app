import { Request, Response, NextFunction } from 'express'
import { HttpError } from 'http-errors'

function errorHandler(error: HttpError, req: Request, res: Response, next: NextFunction) {
  try {
    const err = error.status ?? 500
    res.status(err).json()
  } catch (err) {
    console.error(err)
  }
}

export default errorHandler