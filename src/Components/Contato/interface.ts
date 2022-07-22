export interface ContatoProps {
  image: string;
  name: string;
  phone: string;
  id: string;
  index: number
  contatos: any[];
  setContatos: React.Dispatch<React.SetStateAction<any>>;
}