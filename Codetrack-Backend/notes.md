Client(request(name, email , password)) ----> <-(middleware ())BE->(response (name, email, password, API-KEY))-->{MONGODB}


request - middleware - response

FE(val) --> middleware[(error-handler), (authenticate)] --> (BE(validate) -> schema(val) -> database)