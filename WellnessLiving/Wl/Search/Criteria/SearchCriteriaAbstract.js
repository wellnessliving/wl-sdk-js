/**
 * Base class for search criteria.
 *
 * The criterion is actually a search condition, has a visual part and does not belong to any search entity.
 * To associate the criteria with any search entity, you should use an entity interface.
 *
 * Example: {@link Wl_Search_SearchEntityAbstract}.
 */
function Wl_Search_Criteria_SearchCriteriaAbstract()
{
  // Empty constructor.
}

/**
 * Client`s ACH Data saved / not saved search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ACHSavedCriteria = 1215;

/**
 * Client`s "Account Balance" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.AccountBalanceCriteria = 84;

/**
 * Client`s "Achieve User" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.AchieveUserCriteria = 127;

/**
 * Client`s "Address" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.AddressCriteria = 77;

/**
 * Client`s "Age" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.AgeCriteria = 117;

/**
 * Client`s "Service Visits" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.AttendanceCriteria = 1150;

/**
 * Client`s "Belt rank" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.BeltRankCriteria = 138;

/**
 * Birthday search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.BirthdayCriteria = 71;

/**
 * Client`s "Cell Phone" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.CellPhoneCriteria = 74;

/**
 * Client`s "City" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.CityCriteria = 78;

/**
 * Client Activity Date search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientActivityDateCriteria = 1292;

/**
 * Client`s "Client Alerts" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientAlertsCriteria = 83;

/**
 * Client`s "Client Group" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientGroupCriteria = 153;

/**
 * Client`s "Client ID" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientIdCriteria = 82;

/**
 * "Client" search criteria. Allows searching by a list of UID.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientListCriteria = 1469;

/**
 * Client Since Date search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientSinceDateCriteria = 125;

/**
 * Client`s "Client Status" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientStatusCriteria = 122;

/**
 * "Client type" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ClientTypeCriteria = 118;

/**
 * Client`s Credit Card saved / not saved search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.CreditCardSavedCriteria = 1214;

/**
 * Client`s "Edited Purchase Options" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.EditedPurchaseOptionsCriteria = 121;

/**
 * Client`s "Email" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.EmailCriteria = 73;

/**
 * Criteria "This client's transactions are handled by (this client or a relationship)".
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FamilyPayCriteria = 1633;

/**
 * Client`s "Custom Field (Checkbox)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FieldCheckboxCriteria = 158;

/**
 * Client`s "Custom Field (Dropdown)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FieldDropdownCriteria = 160;

/**
 * Client`s "Custom Field (Radio)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FieldRadioCriteria = 156;

/**
 * Client`s "Custom Field (Text)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FieldTextCriteria = 81;

/**
 * Client`s flagged / not flagged search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.FlagUserCriteria = 1570;

/**
 * Client`s "Gender" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.GenderCriteria = 136;

/**
 * Client`s "Home Location" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.HomeLocationCriteria = 137;

/**
 * Client`s "Home Phone" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.HomePhoneCriteria = 75;

/**
 * "Lead source" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.LeadSourceCriteria = 1831;

/**
 * Client`s "Location Attended" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.LocationAttendCriteria = 1525;

/**
 * Client`s "First Name" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.NameFirstCriteria = 67;

/**
 * Client`s "Last Name" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.NameLastCriteria = 70;

/**
 * Client`s progress (transformation) log search criteria for "Blood Pressure" field.
 *
 * Search data consists of two values that are compared independently and glued with "and" operator
 * with the same comparison operation. So if, for example,
 * {@link Wl_Search_SearchOperationSid.GREATER_THAN SearchOperationSid::GREATER_THAN} is chosen then
 * both numbers must be greater for the record to match.
 * E.g. 120/80 is greater than 110/70, but is neither less, greater or equal to 130/70.
 *
 * It is also possible to search by only one part of blood pressure.
 * {@link \Wl\Login\Search\SearchData\BloodPressure\BloodPressureSearchData}
 * can be initialized from array (see
 * {@link \Wl\Login\Search\SearchData\BloodPressure\BloodPressureSearchData::fromArray() BloodPressureSearchData::fromArray()}
 * ) with either only one of the array keys provided or one of the values being an empty string. For example,
 * if `s_diastolic` is set to '80' and `s_systolic` is `null`, ''(empty string), or absent -
 * the criterion will match all users with diastolic pressure being 80, regardless of their systolic value.
 *
 * `['s_diastolic' -> '123']`
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressBloodPressureCriteria = 294;

/**
 * Client`s "Custom Field (Float)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressDecimalCriteria = 163;

/**
 * Client's "Custom Field (Image)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressImageCriteria = 251;

/**
 * Client`s "Custom Field (Integer)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressIntegerCriteria = 164;

/**
 * Transformation log measurement search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressMeasurementCriteria = 534;

/**
 * Client`s "Custom Field (Float)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressPercentageCriteria = 165;

/**
 * Client`s "Custom Field (Text)" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ProgressTextCriteria = 248;

/**
 * Client`s "Purchase Option expiring" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.PromotionExpireSearchCriteria = 1177;

/**
 * Client`s "Visits remaining" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.PromotionRemainSearchCriteria = 1173;

/**
 * Client`s "Active Purchases" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.PurchasesActiveCriteria = 889;

/**
 * Client`s "Purchases" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.PurchasesCriteria = 139;

/**
 * Client's form completion search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.QuizFormStatusCriteria = 1233;

/**
 * Client`s "State" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.RegionCriteria = 79;

/**
 * Client`s relationship status search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.RelationshipUserCriteria = 1592;

/**
 * "Client reviews" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ReviewSearchCriteria = 1491;

/**
 * Client`s "Rewards points" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.RewardsPointsCriteria = 128;

/**
 * Test criteria A.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SearchTestACriteria = 42;

/**
 * Test criteria B.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SearchTestBCriteria = 43;

/**
 * Test criteria.
 * Determined as disabled.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SearchTestDisableCriteria = 260;

/**
 * Test criteria C.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SearchTestNoInterfaceCriteria = 62;

/**
 * Client`s "Services Attended" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ServicesAttendedCriteria = 131;

/**
 * Client`s "First Visit" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ServicesFirstVisitCriteria = 1152;

/**
 * Client`s "Signed Contract" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SignedContractCriteria = 120;

/**
 * Client`s "Signed Waiver" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SignedWaiverCriteria = 119;

/**
 * Client`s "Staff Verification required" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.StaffVerificationRequiredCriteria = 162;

/**
 * Client`s "Subscription Status" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.SubscriptionStatusCriteria = 175;

/**
 * Last visit search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.VisitLastCriteria = 1143;

/**
 * Client`s "Milestones visit" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.VisitMilestoneCriteria = 1146;

/**
 * Client`s "Work Phone" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.WorkPhoneCriteria = 76;

/**
 * Client`s "Zip" search criteria.
 *
 * @type {number}
 */
Wl_Search_Criteria_SearchCriteriaAbstract.ZipCriteria = 80;
