export type QrCodeErrorCorrectionLevel = "low" | "medium" | "quartile" | "high" | "L" | "M" | "Q" | "H"
// TODO: use more specific type if https://github.com/microsoft/TypeScript/issues/41160 lands
export type RGBAColor = `#${string}`
export type QRCodeMaskPattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
