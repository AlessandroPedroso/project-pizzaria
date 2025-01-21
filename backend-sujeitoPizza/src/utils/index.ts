export const primeiroNomePadronizado = (nome: string): string => {
  const primeiraLetra = nome[0].toUpperCase() as string;

  return nome.replace(nome[0], primeiraLetra);
};
