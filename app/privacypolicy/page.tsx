import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function Page() {
  return (
    <div className="text-gray-500 dark:text-gray-400">
      <h1 className="mb-10 text-5xl font-extrabold text-gray-500 dark:text-gray-200 text-center">
        Política de Privacidade
      </h1>
      <p className="mb-3">Última atualização: 16/08/2024</p>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        O Ride Saver respeita a sua privacidade e adere às diretrizes da Lei
        Geral de Proteção de Dados (LGPD) e do Regulamento Geral sobre a
        Proteção de Dados (GDPR). Esta política explica como lidamos com seus
        dados, mesmo que o aplicativo não colete ou armazene informações
        pessoais.
      </p>
      <ol className="list-decimal list-inside">
        <li className="mb-2 font-bold">Coleta de Dados Pessoais</li>
        <p className="mt-2">
          O Ride Saver não coleta, armazena ou processa nenhum dado pessoal dos
          usuários. Não solicitamos nome, e-mail, telefone, informações de
          localização ou qualquer outro dado que possa identificar os usuários.
        </p>
        <li className="mb-2 mt-2 font-bold">Finalidade do Tratamento de Dados</li>
        <p className="mt-2">
          Como não coletamos dados pessoais, não há processamento de dados para
          fins específicos.
        </p>
        <li className="mb-2 mt-2 font-bold">Compartilhamento de Dados</li>
        <p className="mt-2">
          Nenhum dado pessoal é coletado, e portanto, não há compartilhamento de
          dados com terceiros.
        </p>
        <li className="mb-2 mt-2 font-bold">Direitos dos Usuários</li>
        <p className="mt-2">
          De acordo com a LGPD e o GDPR, você tem direitos relacionados à
          proteção de seus dados pessoais. No entanto, como o Ride Saver não
          coleta dados pessoais, esses direitos não se aplicam neste contexto.
        </p>
        <li className="mb-2 mt-2 font-bold">Segurança</li>
        <p className="mt-2">
          Embora o Ride Saver não colete dados pessoais, adotamos medidas de
          segurança adequadas para proteger o aplicativo contra acessos não
          autorizados e outras ameaças.
        </p>
        <li className="mb-2 mt-2 font-bold">Alterações a Esta Política</li>
        <p className="mt-2">
          Podemos atualizar esta política de privacidade conforme necessário
          para refletir mudanças no aplicativo ou em requisitos legais.
          Recomendamos que os usuários revisem esta política periodicamente.
        </p>
        <li className="mb-2 mt-2 font-bold">Contato</li>
        <p className="mt-2">
          Se você tiver dúvidas sobre esta política de privacidade ou sobre a
          conformidade com a LGPD e o GDPR, entre em contato conosco pelo
          e-mail: ridesaver940@gmail.com.
        </p>
      </ol>
    </div>
  );
}
