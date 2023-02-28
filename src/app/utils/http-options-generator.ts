import { HttpParams } from "@angular/common/http"

export function options(qParams?: any): any {

    if (!qParams) return {}

    let params = new HttpParams()

    Object.keys(qParams)
        .filter(key => qParams[key] !== '')
        .map(key => params = params.append(key, qParams[key]))

    return { params }
}