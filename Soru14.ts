// SADECE BU SATIRI DEĞİŞTİRİN
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error
config.api.url = "yeni-url";

// @ts-expect-error
config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);
