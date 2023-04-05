import myWorker from './worker?worker';
import * as Comlink from 'comlink';
export const parshMesh = async (luaStr: string, meshId: number) => {
  return `${luaStr}+${meshId}`;
};
const workerInstance = new myWorker();

export const workerParseMesh =
  Comlink.wrap<typeof import('./worker')>(workerInstance).workerParseMesh;
