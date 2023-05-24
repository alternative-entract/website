import {Breadcrumb, Section} from "../../components";
import {PageLayout} from "../../layouts/page.layout";
import {useProducts} from "../../features/products/useProducts";
import {useCallback, useEffect, useState} from "react";
import {Product} from "../../types/product";
import {CategoryTabs} from "../../components/categoryTabs/categoryTabs.component";

const Products = () => {
    const { isLoading, isError, products } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categoriesOptions, setCategoriesOptions] = useState<string[]>([]);

    const handleCategoryChange = useCallback((category: string | null) => {
        setSelectedCategory(category || null);
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const filteredProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);

    useEffect(() => {
        const categories = [...new Set(products.map((product) => product.category))];
        setCategoriesOptions(categories);
    }, [products]);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>An error occurred...</span>;
    }

    if (!products.length) {
        return <span>No products !)</span>;
    }

    return (
        <PageLayout>
            <Section>
                <Breadcrumb items={[{ title: 'Catalogue produits' }]} />
                <CategoryTabs categories={categoriesOptions} onCategoryTabChange={handleCategoryChange} />
                {filteredProducts.map(product => product.name)}
            </Section>
        </PageLayout>
    )
}

export default Products