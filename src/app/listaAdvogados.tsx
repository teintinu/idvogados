import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export function ListaAdvogados() {
  return (
    <div style={{padding: '20px'}}>
      <Typography variant="h4" component="h4">
        Listagem de advogados
      </Typography>
      
      <Typography variant="body1" component="p" style={{padding: '20px'}}>
        Esta funcionalidade deve existir? Precisamos de consultoria, especialmente jurídica.
      </Typography>

      <Typography variant="body1" component="p" style={{padding: '20px'}}>
        Sem essa funcionalidade o(a) trabalhador(a) precisa aguardar o(a) advogado(a) ver seu caso e apresentar uma proposta.
      </Typography>

    </div>
  )
}
