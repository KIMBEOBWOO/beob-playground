import { applyDecorators, SetMetadata } from '@nestjs/common';
import { EntityTarget } from 'typeorm';

export function UsingRepository<T>(
  entityTarget: EntityTarget<T>,
  repositoryToken: symbol,
) {
  return applyDecorators(
    SetMetadata('entity', entityTarget),
    SetMetadata('token', repositoryToken),
  );
}
