import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions, EntityTarget } from 'typeorm';

export const CustomRepositoryProvider = <T extends new (...args: any[]) => any>(
  datasourceOptions: DataSourceOptions,
  repository: T,
): Provider => {
  const entity = Reflect.getMetadata('entity', repository) as EntityTarget<T>;
  const repositoryToken = Reflect.getMetadata('token', repository) as symbol;

  return {
    inject: [getDataSourceToken(datasourceOptions)],
    provide: repositoryToken,
    useFactory: (dataSource: DataSource) => {
      const baseRepository = dataSource.getRepository<T>(entity);

      const customRepsoitory = new repository(
        baseRepository.target,
        baseRepository.manager,
        baseRepository.queryRunner,
      );

      return customRepsoitory;
    },
  };
};
