import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const links = [
        'https://poliklinikafokus.hr',
        'https://poliklinikafokus.hr/o-nama',
        'https://poliklinikafokus.hr/optika',
        'https://poliklinikafokus.hr/oftalmologija',
        'https://poliklinikafokus.hr/estetska-medicina',
        'https://poliklinikafokus.hr/cjenik-usluga',
        'https://poliklinikafokus.hr/narucivanje',
        'https://poliklinikafokus.hr/utisci-pacijenata/1',
        'https://poliklinikafokus.hr/utisci-pacijenata/2',
        'https://poliklinikafokus.hr/utisci-pacijenata/3',
        'https://poliklinikafokus.hr/utisci-pacijenata/4',
        'https://poliklinikafokus.hr/utisci-pacijenata/5',
        'https://poliklinikafokus.hr/utisci-pacijenata/6',
        'https://poliklinikafokus.hr/utisci-pacijenata/7',
        'https://poliklinikafokus.hr/utisci-pacijenata/8',
        'https://poliklinikafokus.hr/zanimljivosti',
        'https://poliklinikafokus.hr/zanimljivosti/bocouture',
        'https://poliklinikafokus.hr/zanimljivosti/belotero-intradermalni-fileri',
        'https://poliklinikafokus.hr/zanimljivosti/skin-pen',
        'https://poliklinikafokus.hr/zanimljivosti/belotero-revive',
        'https://poliklinikafokus.hr/zanimljivosti/sculptra',
        'https://poliklinikafokus.hr/zanimljivosti/neuvia-hydra-delux',
        'https://poliklinikafokus.hr/zanimljivosti/radiesse',
        'https://poliklinikafokus.hr/uvjeti-koristenja',
        'https://poliklinikafokus.hr/politika-privatnosti',
    ];

    const sitemap = links.map(url => ({
        url: url,
        lastModified: new Date().toISOString(),
    }));

    return sitemap;
}