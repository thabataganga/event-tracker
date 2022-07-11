import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEvento } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [],
});

export const filtroDeEventos = atom<IFiltroDeEvento>({
  key: "filtroDeEventos",
  default: {},
});
