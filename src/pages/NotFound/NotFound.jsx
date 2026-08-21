import { Layout } from '@/components/ui/Layout/Layout';

const NotFound = () => {
    return (
        <>
            <Layout>
                <div>
                    <h1>Некоректный URL</h1>
                    <h2>Проверите строку поиска</h2>
                </div>
            </Layout>
        </>
    );
};

export default NotFound;
