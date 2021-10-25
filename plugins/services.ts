import { MainService } from '~/services/main/main.service';
import { ProductService } from '~/services/product/product.service';
import { SampleService } from '~/services/sample/sample.service';

export default (ctx: any, inject: any) => {
  const services = {
    main: new MainService(ctx.$axios, ctx.store),
    sample: new SampleService(ctx.$axios, ctx.store),
    product: new ProductService(ctx.$axios, ctx.store),
  };

  inject('services', services);
};
