import Alpine from 'alpinejs';

Alpine.data('dataTable', (id, columns, url) => ({
    id: id,
    columns: columns,
    url: url,
    data: [],
    currentPage: 1,
    lastPage: 1,
    totalItems: 0,
    perPage: 10,
    pages: [],

    async init() {
        await this.fetchData();
    },

    async fetchData() {
        try {
            const response = await fetch(`${this.url}?page=${this.currentPage}&per_page=${this.perPage}`);
            const jsonData = await response.json();
            this.data = jsonData.data;
            this.currentPage = jsonData.current_page;
            this.lastPage = jsonData.last_page;
            this.totalItems = jsonData.total;
            this.updatePagination();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    updatePagination() {
        const totalPages = this.lastPage;
        const currentPage = this.currentPage;
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        this.pages = rangeWithDots;
    },

    async goToPage(page) {
        this.currentPage = page;
        await this.fetchData();
    },

    async previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            await this.fetchData();
        }
    },

    async nextPage() {
        if (this.currentPage < this.lastPage) {
            this.currentPage++;
            await this.fetchData();
        }
    }
}));
