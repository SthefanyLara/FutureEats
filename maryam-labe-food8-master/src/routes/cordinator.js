export const goToCart = (history) =>{
    history.push("/cart")
}

export const goToHome = (history) =>{
    history.push("/")
}

export const goToSignUp = (history) =>{
    history.push("/signUp")
}

export const goToRegisterAdress = (history) =>{
    history.push("/address")
}

export const goToLogin= (history) =>{
    history.push("/login")
}

export const goToProfile = (history) =>{
    history.push(`/profile`)
}

export const goToRestaurant = (history, id) =>{
    history.push(`/restaurant/${id}`)
}

export const goToSearch = (history) =>{
    history.push("/search")
}

export const goToAddress = (history) =>{
    history.push("/editaddress")
}

export const goToPerfil = (history) =>{
    history.push("/perfil")
}
export const goBack = (history) => {
    history.goBack()
}
