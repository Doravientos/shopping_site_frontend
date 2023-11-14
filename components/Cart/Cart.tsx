'use client'
import {EmptyCart} from "./EmptyCart";
import {useState} from "react";
import {ShoppingCard} from "./ShoppingCard";
import {Checkout} from "./Checkout";
import {Invoice} from "./Invoice";
import {Provider, useSelector} from "react-redux";
import store from "../Redux/store";
import {SetData} from "../Utils/SetData";
import {getIsAuth} from "../Redux/slices/isAuthSlice";
import {useRouter} from "next/navigation";



export function Cart() {
    let [showComponent,setShowComponent] =useState("cart")
    const isAuth = useSelector(getIsAuth);
    const router = useRouter()
    if (!isAuth){
        router.push('/auth')
    }
    return (
        <>
            {(() => {
                 if (showComponent == "cart") {
                    return (
                        <>
                            <ShoppingCard Component={showComponent} setComponent={setShowComponent}/>
                        </>
                    )
                }else if (showComponent == "checkout") {
                    return (
                        <>
                            <Checkout Component={showComponent} setComponent={setShowComponent}/>
                        </>
                    )
                }else if (showComponent == "invoice") {
                    return (
                        <>
                            <Invoice Component={showComponent} setComponent={setShowComponent}/>
                        </>
                    )
                }else if (showComponent == "empty") {
                    return (
                        <EmptyCart/>
                    )
                }else {
                     return (
                         <EmptyCart/>
                     )
                 }
            })()}
            <style jsx>{`
              .visibleClass {
                animation: OpenCart 1s ease-out forwards;
              }

              @keyframes OpenCart {
                0% {
                  opacity: 0.4
                }
                100% {
                  opacity: 1
                }
              }`}</style>
        </>

    )
}