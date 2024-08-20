/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { Measure, Unit } from './../index.js';

export type CurrencyUnits = CurrencySIUnits;
export type CurrencySystems = 'SI';

type CurrencySIUnits =
  | 'USD'
  | 'CAD'
  | 'EUR'
  | 'GBP'
  | 'AFN'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'AZN'
  | 'BSD'
  | 'BHD'
  | 'PAB'
  | 'BDT'
  | 'BBD'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BOB'
  | 'BAM'
  | 'BWP'
  | 'BRL'
  | 'BND'
  | 'BGN'
  | 'MMK'
  | 'BIF'
  | 'XOF'
  | 'XPF'
  | 'CVE'
  | 'KYD'
  | 'XAF'
  | 'CLP'
  | 'CLF'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CUC'
  | 'CUP'
  | 'CZK'
  | 'DKK'
  | 'DJF'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'FKP'
  | 'FJD'
  | 'HUF'
  | 'GMD'
  | 'GHS'
  | 'GIP'
  | 'GTQ'
  | 'GNF'
  | 'GYD'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'UAH'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'IRR'
  | 'IQD'
  | 'JMD'
  | 'JOD'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'GEL'
  | 'LBP'
  | 'ALL'
  | 'LSL'
  | 'LRD'
  | 'LYD'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'MRU'
  | 'MUR'
  | 'MXN'
  | 'MDL'
  | 'MNT'
  | 'MAD'
  | 'NPR'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'SVC'
  | 'WST'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'SOS'
  | 'ZAR'
  | 'KRW'
  | 'SSP'
  | 'SEK'
  | 'TJS'
  | 'TZS'
  | 'LKR'
  | 'THB'
  | 'TOP'
  | 'TTD'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VND'
  | 'YER'
  | 'ILS'
  | 'JPY'
  | 'KZT'
  | 'CHF'
  | 'CNY'
  | 'ZMW';

const SI: Record<CurrencySIUnits, Unit> = {
  USD: {
    name: { singular: 'US Dollar', plural: 'US Dollars' },
    to_anchor: 1.0,
  },
  CHF: {
    name: { singular: 'Swiss Franc', plural: 'Swiss Francs' },
    to_anchor: 0.98,
  },
  CNY: {
    name: { singular: 'Yuan Renminbi', plural: 'Yuans Renminbi' },
    to_anchor: 6.89,
  },
  CAD: {
    name: { singular: 'Canadian Dollar', plural: 'Canadian Dollars' },
    to_anchor: 1 / 1.3146823727387462,
  },
  EUR: {
    name: { singular: 'Euro', plural: 'Euros' },
    to_anchor: 1 / 0.9968797663313828,
  },
  GBP: {
    name: { singular: 'Pound Sterling', plural: 'Pounds Sterling' },
    to_anchor: 1 / 0.8629616845012081,
  },
  AFN: {
    name: { singular: 'Afghani', plural: 'Afghanis' },
    to_anchor: 1 / 87.99999999999972,
  },
  DZD: {
    name: { singular: 'Algerian Dinar', plural: 'Algerian Dinars' },
    to_anchor: 1 / 140.37648974549742,
  },
  AOA: {
    name: { singular: 'Angolan Kwanza', plural: 'Angolan Kwanzas' },
    to_anchor: 1 / 429.42090000000513,
  },
  ARS: {
    name: { singular: 'Argentine Peso', plural: 'Argentine Pesos' },
    to_anchor: 1 / 138.72090000000063,
  },
  AMD: {
    name: { singular: 'Armenian Dram', plural: 'Armenian Drams' },
    to_anchor: 1 / 481.61585000000224,
  },
  AWG: {
    name: { singular: 'Aruban Florin', plural: 'Aruban Florins' },
    to_anchor: 1 / 1.8049443562729126,
  },
  AUD: {
    name: { singular: 'Australian Dollar', plural: 'Australian Dollars' },
    to_anchor: 1 / 1.4647936838096354,
  },
  AZN: {
    name: { singular: 'Azerbaijan Manat', plural: 'Azerbaijan Manats' },
    to_anchor: 1 / 1.7,
  },
  BSD: {
    name: { singular: 'Bahamian Dollar', plural: 'Bahamian Dollars' },
    to_anchor: 1 / 0.9990739,
  },
  BHD: {
    name: { singular: 'Bahraini Dinar', plural: 'Bahraini Dinars' },
    to_anchor: 1 / 0.3770747,
  },
  PAB: {
    name: { singular: 'Balboa', plural: 'Balboas' },
    to_anchor: 1 / 0.9990738,
  },
  BDT: {
    name: { singular: 'Bangladeshi Taka', plural: 'Bangladeshi Takas' },
    to_anchor: 1 / 94.90466352026073,
  },
  BBD: {
    name: { singular: 'Barbados Dollar', plural: 'Barbados Dollars' },
    to_anchor: 1 / 2.0159290651008006,
  },
  BZD: {
    name: { singular: 'Belize Dollar', plural: 'Belize Dollars' },
    to_anchor: 1 / 2.0125227213815244,
  },
  BMD: {
    name: { singular: 'Bermudian Dollar', plural: 'Bermudian Dollars' },
    to_anchor: 1.0,
  },
  BTN: {
    name: { singular: 'Bhutanese Ngultrum', plural: 'Bhutanese Ngultrums' },
    to_anchor: 1 / 79.42915200000026,
  },
  BOB: {
    name: { singular: 'Bolivian Boliviano', plural: 'Bolivian Bolivianos' },
    to_anchor: 1 / 6.897692935541542,
  },
  BAM: {
    name: {
      singular: 'Bosnia and Herzegovina Convertible Mark',
      plural: 'Bosnia and Herzegovina Convertible Marks',
    },
    to_anchor: 1 / 1.958246272967781,
  },
  BWP: {
    name: { singular: 'Botswana Pula', plural: 'Botswana Pulas' },
    to_anchor: 1 / 12.839823585959858,
  },
  BRL: {
    name: { singular: 'Brazilian Real', plural: 'Brazilian Reals' },
    to_anchor: 1 / 5.1833,
  },
  BND: {
    name: { singular: 'Brunei Dollar', plural: 'Brunei Dollars' },
    to_anchor: 1 / 1.3963789102100432,
  },
  BGN: {
    name: { singular: 'Bulgarian Lev', plural: 'Bulgarian Levs' },
    to_anchor: 1 / 1.94623,
  },
  MMK: {
    name: { singular: 'Burmese Kyat', plural: 'Burmese Kyats' },
    to_anchor: 1 / 2097.7554017201596,
  },
  BIF: {
    name: { singular: 'Burundian Franc', plural: 'Burundian Francs' },
    to_anchor: 1 / 2060.5810838656503,
  },
  XOF: {
    name: { singular: 'CFA Franc BCEAO', plural: 'CFA Francs BCEAO' },
    to_anchor: 1 / 655.5000000000002,
  },
  XPF: {
    name: { singular: 'CFP Franc', plural: 'CFP Francs' },
    to_anchor: 1 / 119.23000000000026,
  },
  CVE: {
    name: { singular: 'Cabo Verde Escudo', plural: 'Cabo Verde Escudos' },
    to_anchor: 1 / 110.09999999999941,
  },
  KYD: {
    name: {
      singular: 'Cayman Islands Dollar',
      plural: 'Cayman Islands Dollars',
    },
    to_anchor: 1 / 0.8325330358439464,
  },
  XAF: {
    name: {
      singular: 'Central African CFA Franc',
      plural: 'Central African CFA Francs',
    },
    to_anchor: 1 / 655.972896,
  },
  CLP: {
    name: { singular: 'Chilean Peso', plural: 'Chilean Pesos' },
    to_anchor: 1 / 920.5049455914307,
  },
  CLF: {
    name: {
      singular: 'Chilean Unit of Account (UF)',
      plural: 'Chilean Units of Account (UF)',
    },
    to_anchor: 1 / 0.036304478,
  },
  COP: {
    name: { singular: 'Colombian Peso', plural: 'Colombian Pesos' },
    to_anchor: 1 / 4466.499999999996,
  },
  KMF: {
    name: { singular: 'Comorian Franc', plural: 'Comorian Francs' },
    to_anchor: 1 / 455.6759912877039,
  },
  CDF: {
    name: { singular: 'Congolese Franc', plural: 'Congolese Francs' },
    to_anchor: 1 / 1977.0,
  },
  CRC: {
    name: { singular: 'Costa Rican Colón', plural: 'Costa Rican Colóns' },
    to_anchor: 1 / 602.2036249965697,
  },
  HRK: {
    name: { singular: 'Croatian Kuna', plural: 'Croatian Kunas' },
    to_anchor: 1 / 7.581999999999997,
  },
  CUC: {
    name: {
      singular: 'Cuban Convertible Peso',
      plural: 'Cuban Convertible Pesos',
    },
    to_anchor: 1.0,
  },
  CUP: {
    name: { singular: 'Cuban Peso', plural: 'Cuban Pesos' },
    to_anchor: 1 / 24.0,
  },
  CZK: {
    name: { singular: 'Czech Koruna', plural: 'Czech Korunas' },
    to_anchor: 1 / 22.132888,
  },
  DKK: {
    name: { singular: 'Danish Krone', plural: 'Danish Kroner' },
    to_anchor: 1 / 6.648155678430515,
  },
  DJF: {
    name: { singular: 'Djiboutian Franc', plural: 'Djiboutian Francs' },
    to_anchor: 1 / 177.1594000000001,
  },
  DOP: {
    name: { singular: 'Dominican Peso', plural: 'Dominican Pesos' },
    to_anchor: 1 / 55.12399999999991,
  },
  XCD: {
    name: {
      singular: 'East Caribbean Dollar',
      plural: 'East Caribbean Dollars',
    },
    to_anchor: 1 / 2.716739462347865,
  },
  EGP: {
    name: { singular: 'Egyptian Pound', plural: 'Egyptian Pounds' },
    to_anchor: 1 / 30.99999999999974,
  },
  ERN: {
    name: { singular: 'Eritrean Nakfa', plural: 'Eritrean Nakfas' },
    to_anchor: 1 / 15.0,
  },
  ETB: {
    name: { singular: 'Ethiopian Birr', plural: 'Ethiopian Birrs' },
    to_anchor: 1 / 54.975631,
  },
  FKP: {
    name: {
      singular: 'Falkland Islands Pound',
      plural: 'Falkland Islands Pounds',
    },
    to_anchor: 1 / 0.8629616845012081,
  },
  FJD: {
    name: { singular: 'Fijian Dollar', plural: 'Fijian Dollars' },
    to_anchor: 1 / 2.271960169963768,
  },
  GMD: {
    name: { singular: 'Gambian Dalasi', plural: 'Gambian Dalasis' },
    to_anchor: 1 / 54.57258762499966,
  },
  GEL: {
    name: { singular: 'Georgian Lari', plural: 'Georgian Laris' },
    to_anchor: 1 / 2.6430803853000253,
  },
  GHS: {
    name: { singular: 'Ghanaian Cedi', plural: 'Ghanaian Cedis' },
    to_anchor: 1 / 11.623827764571407,
  },
  GNF: {
    name: { singular: 'Guinean Franc', plural: 'Guinean Francs' },
    to_anchor: 1 / 8446.383117160234,
  },
  GYD: {
    name: { singular: 'Guyanese Dollar', plural: 'Guyanese Dollars' },
    to_anchor: 1 / 208.55448823295597,
  },
  HTG: {
    name: { singular: 'Haitian Gourde', plural: 'Haitian Gourdes' },
    to_anchor: 1 / 135.0452999999998,
  },
  HNL: {
    name: { singular: 'Honduran Lempira', plural: 'Honduran Lempiras' },
    to_anchor: 1 / 24.43470000000007,
  },
  HKD: {
    name: { singular: 'Hong Kong Dollar', plural: 'Hong Kong Dollars' },
    to_anchor: 1 / 7.849721972373705,
  },
  HUF: {
    name: { singular: 'Hungarian Forint', plural: 'Hungarian Forints' },
    to_anchor: 1 / 342.8999999999996,
  },
  ISK: {
    name: { singular: 'Icelandic Króna', plural: 'Icelandic Krónur' },
    to_anchor: 1 / 138.24399999999996,
  },
  INR: {
    name: { singular: 'Indian Rupee', plural: 'Indian Rupees' },
    to_anchor: 1 / 82.33276400000002,
  },
  IDR: {
    name: { singular: 'Indonesian Rupiah', plural: 'Indonesian Rupiahs' },
    to_anchor: 1 / 15227.0,
  },
  IRR: {
    name: { singular: 'Iranian Rial', plural: 'Iranian Rials' },
    to_anchor: 1 / 421000.0,
  },
  IQD: {
    name: { singular: 'Iraqi Dinar', plural: 'Iraqi Dinars' },
    to_anchor: 1 / 1317.7500000000002,
  },
  ILS: {
    name: { singular: 'Israeli New Shekel', plural: 'Israeli New Shekels' },
    to_anchor: 1 / 3.678159980014236,
  },
  JMD: {
    name: { singular: 'Jamaican Dollar', plural: 'Jamaican Dollars' },
    to_anchor: 1 / 150.0889,
  },
  JPY: {
    name: { singular: 'Japanese Yen', plural: 'Japanese Yens' },
    to_anchor: 1 / 144.83299999999995,
  },
  JOD: {
    name: { singular: 'Jordanian Dinar', plural: 'Jordanian Dinars' },
    to_anchor: 1 / 0.7095191321813986,
  },
  KZT: {
    name: { singular: 'Kazakhstani Tenge', plural: 'Kazakhstani Tengas' },
    to_anchor: 1 / 464.4484814980027,
  },
  KES: {
    name: { singular: 'Kenyan Shilling', plural: 'Kenyan Shillings' },
    to_anchor: 1 / 140.21599999999995,
  },
  KWD: {
    name: { singular: 'Kuwaiti Dinar', plural: 'Kuwaiti Dinars' },
    to_anchor: 1 / 0.3770747,
  },
  KGS: {
    name: { singular: 'Kyrgystani Som', plural: 'Kyrgystani Soms' },
    to_anchor: 1 / 84.92777777777776,
  },
  LAK: {
    name: { singular: 'Lao Kip', plural: 'Lao Kips' },
    to_anchor: 1 / 16821.0,
  },
  LBP: {
    name: { singular: 'Lebanese Pound', plural: 'Lebanese Pounds' },
    to_anchor: 1 / 1510.0,
  },
  LKR: {
    name: { singular: 'Sri Lankan Rupee', plural: 'Sri Lankan Rupees' },
    to_anchor: 1 / 312.23550000000017,
  },
  LRD: {
    name: { singular: 'Liberian Dollar', plural: 'Liberian Dollars' },
    to_anchor: 1 / 155.9899999999998,
  },
  LYD: {
    name: { singular: 'Libyan Dinar', plural: 'Libyan Dinars' },
    to_anchor: 1 / 4.747300000000042,
  },
  MOP: {
    name: { singular: 'Macanese Pataca', plural: 'Macanese Patacas' },
    to_anchor: 1 / 8.077550000000002,
  },
  MKD: {
    name: { singular: 'Macedonian Denar', plural: 'Macedonian Denars' },
    to_anchor: 1 / 55.8813000000001,
  },
  MGA: {
    name: { singular: 'Malagasy Ariary', plural: 'Malagasy Ariary' },
    to_anchor: 1 / 4181.915,
  },
  MWK: {
    name: { singular: 'Malawian Kwacha', plural: 'Malawian Kwachas' },
    to_anchor: 1 / 1032.3547500000005,
  },
  MYR: {
    name: { singular: 'Malaysian Ringgit', plural: 'Malaysian Ringgits' },
    to_anchor: 1 / 4.70395,
  },
  MVR: {
    name: { singular: 'Maldivian Rufiyaa', plural: 'Maldivian Rufiyaa' },
    to_anchor: 1 / 15.4108,
  },
  MRU: {
    name: { singular: 'Mauritanian Ouguiya', plural: 'Mauritanian Ouguiyas' },
    to_anchor: 1 / 38.34000000000003,
  },
  MXN: {
    name: { singular: 'Mexican Peso', plural: 'Mexican Pesos' },
    to_anchor: 1 / 17.4847,
  },
  MDL: {
    name: { singular: 'Moldovan Leu', plural: 'Moldovan Lei' },
    to_anchor: 1 / 18.2299,
  },
  MNT: {
    name: { singular: 'Mongolian Tugrik', plural: 'Mongolian Tugriks' },
    to_anchor: 1 / 3499.0,
  },
  MAD: {
    name: { singular: 'Moroccan Dirham', plural: 'Moroccan Dirhams' },
    to_anchor: 1 / 10.48999999999999,
  },
  MUR: {
    name: { singular: 'Mauritian Rupee', plural: 'Mauritian Rupees' },
    to_anchor: 1 / 46.21999999999995,
  },
  NPR: {
    name: { singular: 'Nepalese Rupee', plural: 'Nepalese Rupees' },
    to_anchor: 1 / 133.8309999999999,
  },
  NZD: {
    name: { singular: 'New Zealand Dollar', plural: 'New Zealand Dollars' },
    to_anchor: 1 / 1.608472,
  },
  NIO: {
    name: { singular: 'Nicaraguan Córdoba', plural: 'Nicaraguan Córdobas' },
    to_anchor: 1 / 36.59000000000002,
  },
  NGN: {
    name: { singular: 'Nigerian Naira', plural: 'Nigerian Nairas' },
    to_anchor: 1 / 770.9999999999998,
  },
  NOK: {
    name: { singular: 'Norwegian Krone', plural: 'Norwegian Kroner' },
    to_anchor: 1 / 10.571947447205682,
  },
  OMR: {
    name: { singular: 'Omani Rial', plural: 'Omani Rials' },
    to_anchor: 1 / 0.3857246,
  },
  PKR: {
    name: { singular: 'Pakistani Rupee', plural: 'Pakistani Rupees' },
    to_anchor: 1 / 278.41899999999995,
  },
  PYG: {
    name: { singular: 'Paraguayan Guarani', plural: 'Paraguayan Guaranis' },
    to_anchor: 1 / 7255.5,
  },
  PEN: {
    name: { singular: 'Peruvian Nuevo Sol', plural: 'Peruvian Nuevo Soles' },
    to_anchor: 1 / 3.692000000000002,
  },
  PHP: {
    name: { singular: 'Philippine Peso', plural: 'Philippine Pesos' },
    to_anchor: 1 / 56.47363000000007,
  },
  PLN: {
    name: { singular: 'Polish Zloty', plural: 'Polish Zlotys' },
    to_anchor: 1 / 4.596999999999989,
  },
  QAR: {
    name: { singular: 'Qatari Rial', plural: 'Qatari Rials' },
    to_anchor: 1 / 3.6388,
  },
  RON: {
    name: { singular: 'Romanian Leu', plural: 'Romanian Lei' },
    to_anchor: 1 / 4.580999999999976,
  },
  RUB: {
    name: { singular: 'Russian Ruble', plural: 'Russian Rubles' },
    to_anchor: 1 / 101.68690000000004,
  },
  RWF: {
    name: { singular: 'Rwandan Franc', plural: 'Rwandan Francs' },
    to_anchor: 1 / 1076.825,
  },
  SVC: {
    name: { singular: 'Salvadoran Colón', plural: 'Salvadoran Colones' },
    to_anchor: 1 / 8.759000000000002,
  },
  WST: {
    name: { singular: 'Samoan Tala', plural: 'Samoan Talas' },
    to_anchor: 1 / 2.758847142717752,
  },
  SAR: {
    name: { singular: 'Saudi Riyal', plural: 'Saudi Riyals' },
    to_anchor: 1 / 3.751099999999999,
  },
  RSD: {
    name: { singular: 'Serbian Dinar', plural: 'Serbian Dinars' },
    to_anchor: 1 / 107.183581,
  },
  SCR: {
    name: { singular: 'Seychellois Rupee', plural: 'Seychellois Rupees' },
    to_anchor: 1 / 14.43400000000003,
  },
  SLL: {
    name: { singular: 'Sierra Leonean Leone', plural: 'Sierra Leonean Leones' },
    to_anchor: 1 / 15190.0,
  },
  SGD: {
    name: { singular: 'Singapore Dollar', plural: 'Singapore Dollars' },
    to_anchor: 1 / 1.36739487745097,
  },
  SOS: {
    name: { singular: 'Somali Shilling', plural: 'Somali Shillings' },
    to_anchor: 1 / 566.0,
  },
  ZAR: {
    name: { singular: 'South African Rand', plural: 'South African Rands' },
    to_anchor: 1 / 18.780000000000016,
  },
  KRW: {
    name: { singular: 'South Korean Won', plural: 'South Korean Won' },
    to_anchor: 1 / 1313.739,
  },
  SSP: {
    name: { singular: 'South Sudanese Pound', plural: 'South Sudanese Pounds' },
    to_anchor: 1 / 130.01779999999997,
  },
  SEK: {
    name: { singular: 'Swedish Krona', plural: 'Swedish Kronor' },
    to_anchor: 1 / 11.553710174981256,
  },
  TJS: {
    name: { singular: 'Tajikistani Somoni', plural: 'Tajikistani Somonis' },
    to_anchor: 1 / 10.2764499,
  },
  TZS: {
    name: { singular: 'Tanzanian Shilling', plural: 'Tanzanian Shillings' },
    to_anchor: 1 / 2307.0,
  },
  THB: {
    name: { singular: 'Baht', plural: 'Baht' },
    to_anchor: 1 / 36.63899999999993,
  },
  TOP: {
    name: { singular: 'Tongan Paʻanga', plural: 'Tongan Paʻanga' },
    to_anchor: 1 / 2.335679495800702,
  },
  TTD: {
    name: {
      singular: 'Trinidad and Tobago Dollar',
      plural: 'Trinidad and Tobago Dollars',
    },
    to_anchor: 1 / 6.769594,
  },
  TRY: {
    name: { singular: 'Turkish Lira', plural: 'Turkish Liras' },
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    to_anchor: 1 / 26.859900000000004,
  },
  TMT: {
    name: { singular: 'Turkmenistani Manat', plural: 'Turkmenistani Manats' },
    to_anchor: 1 / 3.5,
  },
  UGX: {
    name: { singular: 'Ugandan Shilling', plural: 'Ugandan Shillings' },
    to_anchor: 1 / 3771.0,
  },
  UAH: {
    name: { singular: 'Ukrainian Hryvnia', plural: 'Ukrainian Hryvnias' },
    to_anchor: 1 / 37.40599999999998,
  },
  AED: {
    name: {
      singular: 'United Arab Emirates Dirham',
      plural: 'United Arab Emirates Dirhams',
    },
    to_anchor: 1 / 3.673000000000002,
  },
  UYU: {
    name: { singular: 'Uruguayan Peso', plural: 'Uruguayan Pesos' },
    to_anchor: 1 / 36.91999999999999,
  },
  UZS: {
    name: { singular: 'Uzbekistani Som', plural: 'Uzbekistani Soms' },
    to_anchor: 1 / 12065.0,
  },
  VUV: {
    name: { singular: 'Vanuatu Vatu', plural: 'Vanuatu Vatus' },
    to_anchor: 1 / 142.64999999999998,
  },
  VND: {
    name: { singular: 'Vietnamese Dong', plural: 'Vietnamese Dong' },
    to_anchor: 1 / 23767.0,
  },
  YER: {
    name: { singular: 'Yemeni Rial', plural: 'Yemeni Rials' },
    to_anchor: 1 / 250.2600000000001,
  },
  ZMW: {
    name: { singular: 'Zambian Kwacha', plural: 'Zambian Kwachas' },
    to_anchor: 1 / 121.087022,
  },
  GIP: {
    name: { singular: 'pound', plural: 'pounds' },
    to_anchor: 1 / 0.862738,
  },
  GTQ: {
    name: { singular: 'quetzal', plural: 'quetzals' },
    to_anchor: 1 / 7.727534550193351,
  },
  ALL: {
    name: { singular: 'lek', plural: 'lek' },
    to_anchor: 1 / 116.4999999999995,
  },
  LSL: {
    name: { singular: 'loti', plural: 'lotis' },
    to_anchor: 1 / 17.050748996776555,
  },
};

const measure: Measure<CurrencySystems, CurrencyUnits> = {
  systems: {
    SI,
  },
};

export default measure;
