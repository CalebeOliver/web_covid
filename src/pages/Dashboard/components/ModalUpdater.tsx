import React, { useCallback, useContext, useEffect, useState } from "react";
import { FiAtSign } from "react-icons/fi";

import Modal from "../../../components/Modal";
import Input from "../../../components/Input";

import CountryInformations from "../../../interfaces/CountryInformations";

import api from "../../../services/api";

import { SearchContext } from "../../../context/SearchContext";

interface ModalUpdaterProps{
  data?:CountryInformations;
  reset():void;
}

const ModalUpdater: React.FC<ModalUpdaterProps> = ({data,reset}) => {
  const {search}=useContext(SearchContext);

  const [current, setCurrent] = useState<CountryInformations | undefined>(data);
  const [flagimage, setFlagImage] = useState<File|undefined>();

  // handle de edição do nome do  país
  const handleChangeEditingName = useCallback(({target})=>{
    if(current) setCurrent({...current, name:target.value});
  }, [current]);

  // handle de edição da imagem da bandeira
  const handleChangeEditingFlag = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (current && target.files) setFlagImage(target.files[0]);
  }, [current]);

  // handle de de envio das novas informações
  const handleSubmitUpdate = useCallback(async()=>{
    // o conteudo da requisição precisa ser no formato multipart/formdata
    const form = new FormData();
    if(current){
      if(flagimage){
        form.append('flag',flagimage);
      }
      form.append('name',current.name)
    }

    await api.put(`/countries/${data?.id}`,form);
    await search();
    alert('informações atualizadas!');
    reset();
  },
  [current, data, flagimage, reset, search]);

  useEffect(()=>{
    setCurrent(data)
    setFlagImage(undefined);
  },[data]);

  return (
    <Modal title="Atualizar Informações" open={!!data} onClose={reset} onDone={handleSubmitUpdate} >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {data && current && (
          <>
            <label>
              <input type="file" onChange={handleChangeEditingFlag} hidden />
              <img
                src={flagimage?URL.createObjectURL(flagimage):current.flag}
                width="100"
                style={{ margin: 16 }}
                alt=""
              />
            </label>
            <Input
              value={current.name}
              onChange={handleChangeEditingName}
              icon={FiAtSign}
              label="Nome do País"
              placeholder="Nome do país"
              initialValue={data.name}
              resetButton
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalUpdater;
