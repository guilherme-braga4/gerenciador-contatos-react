export interface FiltroProps {
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  newUser: boolean
  contatos?: any[];
  setContatos: React.Dispatch<React.SetStateAction<any>>;
}