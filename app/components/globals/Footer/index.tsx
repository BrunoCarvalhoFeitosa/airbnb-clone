"use client"
import Link from "next/link"
import { Tabs, Box } from "@radix-ui/themes"
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-full border-b border-b-gray-200">
                <div className="mx-auto max-w-[2520px] pt-10 px-4 sm:px-2 md:px-10 xl:px12">
                    <div>
                        <div>
                            <h3 className="text-2xl font-medium">
                                Inspiração para viagens futuras
                            </h3>
                        </div>
                        <div>
                        <div className="mt-4 font-nunito text-[15px] overflow-x-auto">
                            <Tabs.Root defaultValue="popular">
                                <Tabs.List>
                                    <Tabs.Trigger value="popular">
                                        Popular
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="coast">
                                        Litoral
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="openair">
                                        Atividades ao ar livre
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="historial">
                                        Histórica
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="islands">
                                        Ilhas
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="categories">
                                        Categorias
                                    </Tabs.Trigger>
                                </Tabs.List>
                                <Box pt="6" pb="2">
                                    <Tabs.Content value="popular">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                <Box>
                                                    San Carlos de Bariloche
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Boituva
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Bragança Paulista
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Caldas Novas
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Campinas
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Corumbá
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Curitiba
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Gramado
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Gravatá
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Igaratá
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Itapecerica da Serra
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Itapetininga
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Jarinu
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Kissimmee
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Londres
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Manaus
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Mogi das Cruzes
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Navegantes
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Olímpia
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Orlando
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Panorama
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Paris
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Petrópolis
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Piúma
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Pontal do Paraná
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Porto Alegre
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Porto Feliz
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Ribeirão Preto
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Suzano
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    São Roque
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="coast">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                <Box>
                                                    Aracaju
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Araruama
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Atibaia
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Bertioga
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Armação dos Búzios
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Cabo Frio
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Camboriú
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Fortaleza
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Garopaba
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Guarapari
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Ilhéus
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Imbituba
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Itanhaém
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Itapoá
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    João Pessoa
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Lagoinha
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Laguna
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Maceió
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Mendes
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Miami Beach
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Mongaguá
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Natal
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Niterói
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Palmas
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Porto Seguro
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Punta del Este
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Rio de Janeiro
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    São Miguel dos Milagres
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Trindade
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Vila Velha
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="openair">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                <Box>
                                                    Capitólio
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de casas
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Foz do Iguaçu
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Guapimirim
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Penedo
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Uberlândia
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="historial">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                <Box>
                                                    Belo Horizonte
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Campo Grande
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Juiz de Fora
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Lisboa
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Em frente à praia
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Pirenópolis
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de casas
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Porto
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Em frente à praia
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Belo Horizonte
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Rio Quente
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de apartamentos
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Salvador
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de apartamentos
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Sergipe
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Em frente à praia
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    São Paulo
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de apartamentos
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Águas de Lindóia
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="islands">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                <Box>
                                                    Alcobaça
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de casas
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Canelas
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de apartamentos
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Ibiúna
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Itaparica
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de casas
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Mangaratiba
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Nova York
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Belo Horizonte
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Paracuru
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de casas de praia
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Sete Lagoas
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Sãi Lourenço
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Em frente à praia
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Uberaba
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis de apartamentos
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    Vancouver
                                                </Box>
                                                <Box className="text-gray-500">
                                                    Aluguéis por temporada
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="categories">
                                        <Box className="mb-6 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-md">
                                            <Box>
                                                Piscinas Incríveis
                                            </Box>
                                            <Box>
                                                Ártico
                                            </Box>
                                            <Box>
                                                Acampamentos
                                            </Box>
                                            <Box>
                                                Trailers/motorhomes
                                            </Box>
                                            <Box>
                                                Castelos
                                            </Box>
                                            <Box>
                                                Contêineres
                                            </Box>
                                            <Box>
                                                No interior
                                            </Box>
                                            <Box>
                                                Design
                                            </Box>
                                            <Box>
                                                Casas de terra
                                            </Box>
                                            <Box>
                                                Fazendas
                                            </Box>
                                            <Box>
                                                Parques Nacionais
                                            </Box>
                                            <Box>
                                                Vinhedos
                                            </Box>
                                            <Box>
                                                Uau!
                                            </Box>
                                            <Box>
                                                Micro casas
                                            </Box>
                                            <Box>
                                                Torres
                                            </Box>
                                            <Box>
                                                Moinhos
                                            </Box>
                                            <Box>
                                                Cavernas
                                            </Box>
                                        </Box>
                                    </Tabs.Content>
                                </Box>
                            </Tabs.Root>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[2520px] pt-6 px-4 sm:px-2 md:px-10 xl:px12 pb-12">
                <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-44 mt-6">
                    <ul className="flex flex-col gap-y-2 pb-4 text-gray-600 border-b border-b-gray-200 md:border-b-0">
                        <li className="font-semibold text-black">
                            Atendimento
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Central de ajuda</li>
                        <li className="hover:underline cursor-pointer">
                            Aircover
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Antidiscriminição
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Apoio à pessoa com deficiência</li>
                        <li className="hover:underline cursor-pointer">
                            Opções de cancelamento</li>
                        <li className="hover:underline cursor-pointer">
                            Reporte um problema no bairro</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2 pb-4 text-gray-600 border-b border-b-gray-200 md:border-b-0">
                        <li className="font-semibold text-black">
                            Hospedagem
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Anuncie seu espaço no Airbnb
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Aircover para anfitriões
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Recursos para anfitriões
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Fórum da comunidade
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Hospedagem responsável
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-y-2 pb-4 text-gray-600">
                        <li className="font-semibold text-black">
                            Airbnb
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Newsroom
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Novos recursos
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Carreiras
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Investidores
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Locais emergenciais Airbnb.org
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto max-w-[2520px] pt-6 w-[88%] pb-6 border-t border-t-gray-200">
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <div className="text-gray-600 order-2 xl:order-none">
                        <ul className="flex items-center justify-center gap-x-4 flex-wrap">
                            <li className="hover:underline cursor-pointer">
                                © 2023 Airbnb, Inc.
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Privacidade
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Termos
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Mapa do site
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Informações da empresa
                            </li>
                        </ul>
                    </div>
                    <div className="pb-6 text-gray-900 order-1 xl:order-none">
                        <ul className="flex items-center gap-x-4">
                            <li className="flex items-center gap-x-1">
                                <TbWorld className="text-lg" /> Português (BR)
                            </li>
                            <li>
                                BRL
                            </li>
                            <li className="flex items-center gap-x-1">
                                <Link href="https://www.facebook.com/AirbnbBrasil">
                                    <div className="rounded-md overflow-hidden">
                                        <AiFillFacebook className="text-[26px]" />
                                    </div>
                                </Link>
                                <Link href="https://twitter.com/airbnb_br">
                                    <div className="rounded-md overflow-hidden">
                                        <AiFillTwitterSquare className="text-[26px]" />
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/airbnb">
                                    <div className="rounded-md overflow-hidden">
                                        <FaInstagramSquare className="text-[24px]" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer