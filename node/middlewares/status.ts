export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: {catalog},
  } = ctx


  const sku = await catalog.getSkuById('' + code)
  ctx.body = sku

  await next()
}
