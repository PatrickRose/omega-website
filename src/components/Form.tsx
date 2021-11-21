import { useField } from "formik";
import React, { ReactNode } from "react";

export function TextInput({ label, name, ...props }: { label: string, name: string } & JSX.IntrinsicElements['input']) {
    const [field, meta] = useField({ name, ...props });

    const showError = meta.touched && meta.error;
    const validationClass = "text-red-600 font-bold"

    return <div className="py-2">
        <div className={`flex flex-col sm:flex-row ${showError ? validationClass : ''}`}>
            <label htmlFor={props.id || name} className="w-1/5">{label}</label>

            <input className="flex-1" {...field} aria-describedby={`${props.id || name}-validation`} {...props} />
        </div>
        <div aria-live="polite" className={`${showError ? '' : 'd-none'} ${validationClass}`} id={`${props.id || name}-validation`}>{meta.error}</div>
    </div>
}

export function SubmitButton({ disabled, children, ...props }: { disabled: boolean } & JSX.IntrinsicElements['button']) {
    return <div className="flex" >
        <button type="submit" className="btn-link m-4 p-4 w-full" disabled={disabled} {...props}>{children}</button >
    </div >
}

export function SuccessMessage({ children }: { children: ReactNode }) {
    return <div className="py-2 w-full bg-green-200 rounded">
        <p className="p-2">
            {children}
        </p>
    </div>
}
