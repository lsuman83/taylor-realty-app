export default function Login(){
    return(
        <form>
            <input 
                type='text'
                name='username'
                placeholder='Username'
                className='p-4'
                />
            <input
                type='password'
                name='password'
                placeholder='Password'
                className='p-4'
                />
            <button type='submit'>Login</button>
        </form>
    )
}