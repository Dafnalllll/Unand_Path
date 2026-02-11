import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Eye from '@/components/ui/eye';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Login Akun Anda"
            description="Masukkan email dan kata sandi Anda di bawah ini untuk masuk"
        >
            <Head title="Login" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
                data-aos="fade-down"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2" data-aos="fade-down">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="email@contoh.com"
                                    className="border-2 border-white text-white placeholder:text-gray-50"
                                    data-aos="fade-down"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2" data-aos="fade-down">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-sm"
                                            tabIndex={5}
                                            data-aos="fade-down"
                                        >
                                            Lupa kata password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        className="border-2 border-white pr-10 text-white placeholder:text-gray-50"
                                        data-aos="fade-down"
                                    />
                                    <Eye inputId="password" />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div
                                className="flex items-center space-x-3"
                                data-aos="fade-down"
                            >
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    data-aos="fade-down"
                                />
                                <Label htmlFor="remember">Ingat saya</Label>
                            </div>

                            <div data-aos="zoom-in" data-aos-delay="200">
                                <Button
                                    type="submit"
                                    className="mt-4 w-full cursor-pointer transition-transform duration-200 hover:scale-105"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner />}
                                    Login
                                </Button>
                            </div>
                        </div>

                        {canRegister && (
                            <div
                                className="text-center text-sm text-muted-foreground"
                                data-aos="fade-down"
                            >
                                Belum punya akun?{' '}
                                <TextLink href={register()} tabIndex={5}>
                                    Daftar
                                </TextLink>
                            </div>
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div
                    className="mb-4 text-center text-sm font-medium text-green-600"
                    data-aos="fade-down"
                >
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
