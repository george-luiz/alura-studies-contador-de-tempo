export function tempoParaSegundos(tempo: string) {
    const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

    const horasParaSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasParaSegundos + minutosEmSegundos + Number(segundos);
}