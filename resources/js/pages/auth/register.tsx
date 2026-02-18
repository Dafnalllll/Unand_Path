import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import Eye from '@/components/ui/eye';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { router } from '@inertiajs/react';
import { store } from '@/routes/register';


export default function Register() {
    return (
        <AuthLayout
            title="Buat Akun Anda"
            description="Masukkan detail Anda di bawah untuk membuat akun"
        >
            <Head title="Register" />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
                data-aos="fade-down"
                onSuccess={() => router.visit('/login')}
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Nama Lengkap"
                                    className="border-2 border-white text-white placeholder:text-gray-50"
                                    data-aos="fade-down"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@contoh.com"
                                    className="border-2 border-white text-white placeholder:text-gray-50"
                                    data-aos="fade-down"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                        className="border-2 border-white pr-10 text-white placeholder:text-gray-50"
                                        data-aos="fade-down"
                                    />
                                    <Eye inputId="password" />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">
                                    Konfirmasi password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Konfirmasi password"
                                        className="border-2 border-white pr-10 text-white placeholder:text-gray-50"
                                        data-aos="fade-down"
                                    />
                                    <Eye inputId="password_confirmation" />
                                </div>
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <div data-aos="zoom-in" data-aos-delay="200">
                                <Button
                                    type="submit"
                                    className="mt-4 w-full cursor-pointer transition-transform duration-200 hover:scale-105"
                                    tabIndex={5}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner />}
                                    Daftar
                                </Button>
                            </div>
                        </div>

                        <div className="text-center text-sm text-muted-foreground">
                            Sudah punya akun?{' '}
                            <TextLink href={login()} tabIndex={6}>
                                Login
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
