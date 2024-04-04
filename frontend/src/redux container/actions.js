import { update_scan_results } from "./constants";

export const updateScanResults = (results) => ({
    type: update_scan_results,
    payload: results,
});
