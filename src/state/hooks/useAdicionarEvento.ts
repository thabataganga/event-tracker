import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../utils";
import { listaDeEventosState } from "../atom";

export default function useAdicionarEvento() {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error("Eventos não podem ser cadastrados no passado");
    }
    evento.id = obterId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
}
