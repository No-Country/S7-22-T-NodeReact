import Sidebar from "@/components/sidebar/Sidebar";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
    }

  return (
      <>
          <Layout name={'Inicio'}>
              <form>
                  <InputField label={'Name'} type={'text'} value={name} onChange={setName} />
                  <InputField label={'Email'} type={'email'} value={email} onChange={setEmail} />
                  <Button type={'submit'} text={'Registrame'} onClick={handleSubmit} visible={true} />
              </form>
          </Layout>
      </>
  )
}