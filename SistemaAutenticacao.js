export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    /* Verifica se o "autenticar" existe no "autenticavel" e se ele é uma instancia de Function */
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
  }
}

/*
export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}
*/