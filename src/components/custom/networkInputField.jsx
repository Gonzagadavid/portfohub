import React from "react";
import { Controller } from "react-hook-form";
import { FormLabel, FormMessage } from "../ui/form"; // Ajuste o caminho se necessário
import { Input } from "@/components/ui/input"; // Ajuste o caminho se necessário

const NetworkInputField = ({ label, control }) => {
    return (
        <div>
            <FormLabel>{label}</FormLabel>
            <div className="flex flex-wrap gap-4"> {/* Usando gap para espaçamento */}
                {/* GitHub */}
                <Controller
                    name="network.github"
                    control={control}
                    defaultValue="https://github.com/" // Link padrão
                    render={({ field, fieldState }) => (
                        <div className="flex-1 min-w-[150px] max-w-[300px]"> {/* Largura mínima e máxima ajustadas */}
                            <label htmlFor="github" className="block mb-1 text-sm">GitHub</label>
                            <Input
                                id="github"
                                placeholder="Insira o link do seu perfil no GitHub"
                                {...field}
                                className="text-sm" 
                            />
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </div>
                    )}
                />

                {/* LinkedIn */}
                <Controller
                    name="network.linkedin"
                    control={control}
                    defaultValue="https://linkedin.com/in/" // Link padrão
                    render={({ field, fieldState }) => (
                        <div className="flex-1 min-w-[150px] max-w-[300px]"> 
                            <label htmlFor="linkedin" className="block mb-1 text-sm">LinkedIn</label>
                            <Input
                                id="linkedin"
                                placeholder="Insira o link do seu perfil no LinkedIn"
                                {...field}
                                className="text-sm" 
                            />
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </div>
                    )}
                />

                {/* Instagram */}
                <Controller
                    name="network.instagram"
                    control={control}
                    defaultValue="https://instagram.com/" // Link padrão
                    render={({ field, fieldState }) => (
                        <div className="flex-1 min-w-[150px] max-w-[300px]"> 
                            <label htmlFor="instagram" className="block mb-1 text-sm">Instagram</label>
                            <Input
                                id="instagram"
                                placeholder="Insira o link do seu perfil no Instagram"
                                {...field}
                                className="text-sm" 
                            />
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </div>
                    )}
                />

                {/* WhatsApp */}
                <Controller
                    name="network.whatsapp"
                    control={control}
                    defaultValue="https://wa.me/" // Link padrão
                    render={({ field, fieldState }) => (
                        <div className="flex-1 min-w-[150px] max-w-[300px]"> 
                            <label htmlFor="whatsapp" className="block mb-1 text-sm">WhatsApp</label>
                            <Input
                                id="whatsapp"
                                placeholder="Insira o link para o WhatsApp (https://wa.me/5511999999999)"
                                {...field}
                                className="text-sm" 
                            />
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default NetworkInputField; // Corrigido para o nome correto da função
