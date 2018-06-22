<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="/init.jsp" %>

<c:set var="ns"><portlet:namespace /></c:set>

<div id="content-container-${ns}"></div>

<script data-union-widget="content" data-union-container="content-container-${ns}" type="application/json">
{
    "textation": {
        "heading": "Lundegaard Digital Coffee",
        "content": "This project shows how both react-union and react-union-scripts can be used within Liferay portal platform."
    }
}
</script>