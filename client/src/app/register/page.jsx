'use client'
import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody,Select, RadioGroup, CardHeader, SelectItem, Radio, image} from "@nextui-org/react";
import { useFormik } from 'formik';

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setLoginDetails } from "@/redux/reducerSlices/userSlice";
import { useDispatch } from "react-redux";


export default function Main() {
  const dispatch =useDispatch()
  const router =useRouter()
  const [selected, setSelected] = React.useState("login");
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      phoneNumber: '',
      password: '',
      role: ''
    },
    onSubmit: values => {
      registerUser(values)
    },
  });


  const formikLogin = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    onSubmit: values => {
      loginUser(values)
    },
  });

  const registerUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:4000/register', requestOptions);
  const data = await response.json()

  if(response.status == '200'){
    toast.success(data.msg)
    setSelected('login')
  }else{
    toast.error(data.msg)
  }
}


  const loginUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:4000/login', requestOptions);
  const data = await response.json()

  if(response.status == '200'){
    toast.success(data.msg)
    dispatch(setLoginDetails(data))
    if(data.user.role == 'user'){
      router.push('/dashboard')
    }else{
      router.push('/admin-dashboard')
    }

  }else{
    toast.error(data.msg)
  }
}




  
  return (
    <div class="header" className="">
      <Card className=" flex self-center max-w-full w-[390px] position: absolute; ">
        
      
    <div className='text self-center'>Welcome</div>
    <div className='underline'></div>
        <CardBody className='container'>
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form onSubmit={formikLogin.handleSubmit} className="flex flex-col gap-4">
              <Input
               name="phoneNumber"
               onChange={formikLogin.handleChange}
               value={formikLogin.values.phoneNumber}
              isRequired label="Phone Number" placeholder="Enter your phoneNumber"  />
             
                <Input
                   name="password"
                   onChange={formikLogin.handleChange}
                   value={formikLogin.values.password}
                  isRequired
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link className='forgot-password' size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
 
            <Tab key="sign-up" title="Sign up">
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 ">
              <Input
               name="phoneNumber"
               onChange={formik.handleChange}
               value={formik.values.phoneNumber}
              isRequired label="Phone Number" placeholder="Enter your phone Number"  />
              <Input
                 name="fullName"
                 onChange={formik.handleChange}
                 value={formik.values.fullName}
               isRequired label="fullName" placeholder="Enter your Full Name" />
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                isRequired label="Email" placeholder="Enter your Email" type="email" />
                <Input
                   name="password"
                   onChange={formik.handleChange}
                   value={formik.values.password}
                  isRequired
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                />
             <RadioGroup
      label="Select role"
      name="role"
      onChange={formik.handleChange}
      value={formik.values.role}
    >
      <Radio value="user">User</Radio>
      <Radio value="merchant">Merchant</Radio>
    </RadioGroup>

                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link className='forgot-password' size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}