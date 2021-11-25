const isEmpty = (val?: string | number | null | undefined) =>
  val === undefined || val === null || val === "";

export { isEmpty };
