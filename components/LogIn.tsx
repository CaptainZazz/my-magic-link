import type {FormEventHandler} from "react";

export interface LogInProps {
    onSubmit: (email: string) => void;
    errorMsg?: string
}

export function LogIn(props: LogInProps) {
    const onSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        props.onSubmit(event.currentTarget['email']?.value || '');
    };
    return <form onSubmit={onSubmit}>

        <label>
            <span>Email</span>
            <input type="email" name="email" required />
        </label>

        <button type="submit">Sign Up / Login</button>

        {props.errorMsg ? <p style={{color: 'red'}}>{props.errorMsg}</p> : null}

    </form>
}
