import { getBolUrl } from "@/lib/bol-api";

/**
 * GET /api/bol/[ean]
 * Geeft de affiliate URL terug voor een EAN-code.
 */
export async function GET(request, { params }) {
  const { ean } = params;

  if (!ean || !/^\d{8,13}$/.test(ean)) {
    return Response.json({ affiliateUrl: null }, { status: 400 });
  }

  const affiliateUrl = getBolUrl({ ean, name: ean });
  return Response.json({ affiliateUrl });
}
