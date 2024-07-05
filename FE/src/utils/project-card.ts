import { GlobalToken } from "antd";
import { STATUS_BANNER_VARIANT } from "../constants/project-card";
import moment from "moment";

export function inferStatusBannerVariant(schedule: {
    startDate: Date;
    endDate: Date;
    idoOpenDate: Date;
    idoCloseDate: Date;
}): STATUS_BANNER_VARIANT {
    const currentTime = moment(new Date());

    const { startDate, endDate, idoOpenDate, idoCloseDate } = schedule;

    // project has closed
    if (moment(endDate).diff(currentTime) < 0 && moment(idoCloseDate).diff(currentTime) < 0)
        return STATUS_BANNER_VARIANT.CLOSED;

    // project has ended the funding phrase
    if (moment(endDate).diff(currentTime) < 0 && moment(idoOpenDate).diff(currentTime) > 0)
        return STATUS_BANNER_VARIANT.FUNDING_CLOSED;

    // project which has not started is considered as upcoming project
    if (moment(startDate).diff(currentTime) > 0) return STATUS_BANNER_VARIANT.UPCOMING;

    // project is in the IDO state (claiming token)
    if (moment(idoOpenDate).diff(currentTime) < 0 && moment(idoCloseDate).diff(currentTime) > 0)
        return STATUS_BANNER_VARIANT.TOKEN_CLAIMING;

    // project is funding
    if (moment(startDate).diff(currentTime) < 0 && moment(endDate).diff(currentTime) > 0)
        return STATUS_BANNER_VARIANT.FUNDING;

    // default case
    return STATUS_BANNER_VARIANT.UNKNOWN;
}

export function prepareVariantStyle(
    variant: STATUS_BANNER_VARIANT,
    themeToken: GlobalToken
): { backgroundColor: string; color: string } {
    switch (variant) {
        case STATUS_BANNER_VARIANT.UPCOMING: {
            return {
                // backgroundColor: "#CCE2FF",
                // color: themeToken.colorInfo,
                backgroundColor: "#AED6DC",
                color: "#8AC4CD",
            };
        }

        case STATUS_BANNER_VARIANT.FUNDING: {
            return {
                backgroundColor: "#6EC071",
                color: "#4CAF50",
            };
        }

        // case STATUS_BANNER_VARIANT.TOKEN_CLAIMING: {
        //     return {
        //         backgroundColor: "#FFD6B4",
        //         color: themeToken.colorPrimary,
        //     };
        // }

        // case STATUS_BANNER_VARIANT.CLOSED: {
        //     return {
        //         backgroundColor: themeToken.colorTextSecondary,
        //         color: themeToken.colorWhite,
        //     };
        // }

        case STATUS_BANNER_VARIANT.FUNDING_CLOSED: {
            return {
                backgroundColor: "#FF9A8D",
                color: "#FF6D5A",
            };
        }

        default: {
            return {
                backgroundColor: themeToken.colorTextSecondary,
                color: themeToken.colorWhite,
            };
        }
    }
}

export function inferStatusBannerVariantV2(schedule: { startDate: Date; endDate: Date }): STATUS_BANNER_VARIANT {
    const currentTime = moment(new Date());

    const { startDate, endDate } = schedule;

    // project has ended the funding phrase
    if (moment(endDate).diff(currentTime) < 0)
        return STATUS_BANNER_VARIANT.FUNDING_CLOSED;

    // project which has not started is considered as upcoming project
    if (moment(startDate).diff(currentTime) > 0) return STATUS_BANNER_VARIANT.UPCOMING;

    // project is funding
    if (moment(startDate).diff(currentTime) < 0 && moment(endDate).diff(currentTime) > 0)
        return STATUS_BANNER_VARIANT.FUNDING;

    // default case
    return STATUS_BANNER_VARIANT.UNKNOWN;
}
