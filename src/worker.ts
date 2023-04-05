/// <reference lib="webworker" />

import { parseMesh } from './utils.ts';
import * as Comlink from 'comlink';

export const workerParseMesh = async (luaStr: string, meshId: number) => {
  return await parseMesh(luaStr, meshId);
};

Comlink.expose({
  workerParseMesh,
});
