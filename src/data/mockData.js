// Mock account data for dashboard - 20 Active PAs
// Total PNL = $30,900
// First 10 accounts: ~$2,060 each, delta max $60 between them ($20,600 total)
// Last 10 accounts: ~$1,030 each (half of first 10), delta max $100 ($10,300 total)
export const accountData = [
  // First 10 accounts - similar PNL around $2,060, max $60 delta
  { id: 1, pnl: 2055, balance: 52055, status: "Active", state: "Active" },
  { id: 2, pnl: 2070, balance: 52070, status: "Active", state: "Active" },
  { id: 3, pnl: 2040, balance: 52040, status: "Active", state: "Active" },
  { id: 4, pnl: 2080, balance: 52080, status: "Active", state: "Active" },
  { id: 5, pnl: 2045, balance: 52045, status: "Active", state: "Active" },
  { id: 6, pnl: 2065, balance: 52065, status: "Active", state: "Active" },
  { id: 7, pnl: 2060, balance: 52060, status: "Active", state: "Active" },
  { id: 8, pnl: 2075, balance: 52075, status: "Active", state: "Active" },
  { id: 9, pnl: 2050, balance: 52050, status: "Active", state: "Active" },
  { id: 10, pnl: 2060, balance: 52060, status: "Active", state: "Active" },
  // Last 10 accounts - half PNL (~$1,030), max $100 delta
  { id: 11, pnl: 1030, balance: 51030, status: "Active", state: "Active" },
  { id: 12, pnl: 1060, balance: 51060, status: "Active", state: "Active" },
  { id: 13, pnl: 1000, balance: 51000, status: "Active", state: "Active" },
  { id: 14, pnl: 1070, balance: 51070, status: "Active", state: "Active" },
  { id: 15, pnl: 1025, balance: 51025, status: "Active", state: "Active" },
  { id: 16, pnl: 1040, balance: 51040, status: "Active", state: "Active" },
  { id: 17, pnl: 1050, balance: 51050, status: "Active", state: "Active" },
  { id: 18, pnl: 1020, balance: 51020, status: "Active", state: "Active" },
  { id: 19, pnl: 1025, balance: 51025, status: "Active", state: "Active" },
  { id: 20, pnl: 980, balance: 50980, status: "Active", state: "Active" },
];
