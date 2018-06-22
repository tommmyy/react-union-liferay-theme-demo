<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="/init.jsp" %>

<c:set var="ns"><portlet:namespace /></c:set>

<div id="form-container-${ns}"></div>

<script data-union-widget="form" data-union-container="form-container-${ns}" type="application/json"></script>