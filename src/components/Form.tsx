import { useField } from "formik";
import React, { ReactNode } from "react";

// Error type for a given form
// This essentially says "For any key of the given value, we accept a string if it isn't an object, otherwise we recurse into the type definition for that key"
export type FormError<Type extends { [key: string]: any }> = Partial<{ [Prop in keyof Type]: (Type[Prop] extends { [key: string]: any } ? FormError<Type[Prop]> : string) }>;

export function SelectInput({ label, name, ...props }: { label: string, name: string } & JSX.IntrinsicElements['select']) {
    const [field, meta] = useField({ name, ...props });

    const showError = meta.touched && meta.error;
    const validationClass = "text-red-600 font-bold"

    return <div className="py-2">
        <div className={`flex flex-col sm:flex-row ${showError ? validationClass : ''}`}>
            <label htmlFor={props.id || name} className="w-1/5">{label}</label>

            <select className="flex-1" {...field} aria-describedby={`${props.id || name}-validation`} {...props} />
        </div>
        <div aria-live="polite" className={`${showError ? '' : 'hidden'} ${validationClass}`} id={`${props.id || name}-validation`}>{meta.error}</div>
    </div>
}

export function TextAreaInput({ label, name, ...props }: { label: string, name: string } & JSX.IntrinsicElements['textarea']) {
    const [field, meta] = useField({ name, ...props });

    const showError = meta.touched && meta.error;
    const validationClass = "text-red-600 font-bold"

    return <div className="py-2">
        <div className={`flex flex-col sm:flex-row ${showError ? validationClass : ''}`}>
            <label htmlFor={props.id || name} className="w-1/5">{label}</label>

            <textarea className="flex-1" {...field} aria-describedby={`${props.id || name}-validation`} {...props} />
        </div>
        <div aria-live="polite" className={`${showError ? '' : 'hidden'} ${validationClass}`} id={`${props.id || name}-validation`}>{meta.error}</div>
    </div>
}

export function TextInput({ label, name, ...props }: { label: string, name: string } & JSX.IntrinsicElements['input']) {
    const [field, meta] = useField({ name, ...props });

    const showError = meta.touched && meta.error;
    const validationClass = "text-red-600 font-bold"

    return <div className="py-2">
        <div className={`flex flex-col sm:flex-row ${showError ? validationClass : ''}`}>
            <label htmlFor={props.id || name} className="w-1/5">{label}</label>

            <input className="flex-1" {...field} aria-describedby={`${props.id || name}-validation`} {...props} />
        </div>
        <div aria-live="polite" className={`${showError ? '' : 'hidden'} ${validationClass}`} id={`${props.id || name}-validation`}>{meta.error}</div>
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
