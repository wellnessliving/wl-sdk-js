/**
 * List of all custom imports that are supported by system.
 * Each constant defines specific import.
 * Note that if you are adding new constant you should also add new class
 * which should extend {@link Wl_Import_Custom_CustomPerformAbstract}
 * with appropriate name according to constant name, see {@link Wl_Import_Custom_Contact_CustomContact}.
 *
 * Last used ID: 20.
 */
function Wl_Import_Custom_CustomSid()
{
  // Empty constructor.
}

/**
 * Creates recurring appointments with no end date.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.APPOINTMENT_RECURRING = 8;

/**
 * Custom import which allows to import contact block information. See {@link Wl_Import_Custom_Clients_CustomClients}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CLIENTS = 20;

/**
 * Custom import which allows to import client account balance.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CLIENT_ACCOUNT_BALANCE = 10;

/**
 * Custom import which allows to import client note. See {@link Wl_Import_Custom_ClientNote_CustomClientNote}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CLIENT_NOTE = 5;

/**
 * Custom import which allows to import client purchase refund.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CLIENT_PURCHASE_REFUND = 11;

/**
 * Custom import which allows to import client relationship. See {@link Wl_Import_Custom_ClientRelationship_CustomClientRelationship}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CLIENT_RELATIONSHIP = 12;

/**
 * Custom import which allows to import contact log information. See {@link Wl_Import_Custom_Contact_CustomContact}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CONTACT = 1;

/**
 * Custom import which allows to import curves staff-manager custom fields. See {@link Wl_Import_Custom_CurveExtManager_CustomCurveExtManager}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_EXT_MANAGER = 15;

/**
 * Custom import which allows to import curves franchisee custom fields. See {@link Wl_Import_Custom_CurveExtOrganization_CustomCurveExtOrganization}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_EXT_ORGANIZATION = 13;

/**
 * Custom import which allows to import curves staff-owner custom fields. See {@link Wl_Import_Custom_CurveExtOwner_CustomCurveExtOwner}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_EXT_OWNER = 14;

/**
 * Custom import which allows to import curves franchisee. See {@link Wl_Import_Custom_CurveMember_CustomCurveMember}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_FRANCHISE = 7;

/**
 * Custom import which allows to import curves client historical visits. See {@link Wl_Import_Custom_CurveHistoricalVisit_CustomCurveHistoricalVisit}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_HISTORICAL_VISIT = 16;

/**
 * Custom import which allows to import curves members. See {@link Wl_Import_Custom_CurveMember_CustomCurveMember}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_MEMBER = 4;

/**
 * Custom import which allows to start import for the list of franchisees. See {@link Wl_Import_Custom_CurveStart_CustomCurveStart}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.CURVE_START = 9;

/**
 * Creates sold gift cards for clients.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.LOGIN_COUPON = 17;

/**
 * Custom import which allows to import purchase members. See {@link Wl_Import_Custom_PurchaseMember_CustomPurchaseMember}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.PURCHASE_MEMBER = 6;

/**
 * Allows to remove list of purchases from specific file.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.PURCHASE_REMOVE = 18;

/**
 * Custom import which allows to import forms.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.QUIZ = 19;

/**
 * Custom import which allows to import refund dates to update transactions. See {@link Wl_Import_Custom_Refund_CustomRefund}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.REFUND = 2;

/**
 * Custom import which allows to import client reward balance. See {@link Wl_Import_Custom_Reward_CustomReward}.
 *
 * @type {number}
 */
Wl_Import_Custom_CustomSid.REWARD = 3;
