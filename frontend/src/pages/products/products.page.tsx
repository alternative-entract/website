import { Breadcrumb, Section } from "../../components";
import { PageLayout } from "../../layouts/page.layout";
import { useProducts } from "../../features/products/useProducts";
import { useCallback, useEffect, useState } from "react";
import { Product } from "../../types/product";
import { CategoryTabs } from "../../components";
import { t } from "../../utils/i18n/i18n";

const Products = () => {
    const { isLoading, isError, products } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categoriesOptions, setCategoriesOptions] = useState<string[]>([]);

    const handleCategoryChange = useCallback((category: string | null) => {
        setSelectedCategory(category || null);
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const filteredProducts = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);

    useEffect(() => {
        const categories = [
            ...new Set(products.map((product) => product.category)),
        ];
        setCategoriesOptions(categories);
    }, [products]);

    if (isLoading) {
        return <span>{t("common.loading")}</span>;
    }

    if (isError) {
        return <span>{t("products.fetchError")}</span>;
    }

    if (!products.length) {
        return <span>{t("products.emptyList")}</span>;
    }

    return (
        <PageLayout>
            <Section>
                <Breadcrumb items={[{ title: t("products.title") }]} />
                <CategoryTabs
                    categories={categoriesOptions}
                    onCategoryTabChange={handleCategoryChange}
                />
                {filteredProducts.map((product) => product.name)}
            </Section>
        </PageLayout>
    );
};

export default Products;
