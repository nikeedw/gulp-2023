import { deleteAsync } from 'del';

export const reset = async () => {
  await deleteAsync(app.path.clean);
};
