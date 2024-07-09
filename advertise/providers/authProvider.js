import { SessionProvider } from "next-auth/react";

function authProvider({children}){
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
}

export default authProvider;