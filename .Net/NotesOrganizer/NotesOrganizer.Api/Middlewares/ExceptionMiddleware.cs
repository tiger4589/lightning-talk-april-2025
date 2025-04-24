using System.Net;
using Application.Exceptions;

namespace NotesOrganizer.Api.Middlewares;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (NotFoundException e)
        {
            context.Response.StatusCode = (int)HttpStatusCode.NotFound;
            await context.Response.WriteAsJsonAsync(new ProblemDetails
            {
                Message = e.Message,
                RequestId = context.TraceIdentifier
            });
        }
        catch (InvalidOperationException e)
        {
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            await context.Response.WriteAsJsonAsync(new ProblemDetails
            {
                Message = e.Message,
                RequestId = context.TraceIdentifier
            });
        }
        catch (Exception)
        {
            logger.Log(LogLevel.Error, "Unhandled Exception Caught in the middle ware!");
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            await context.Response.WriteAsJsonAsync(new ProblemDetails
            {
                Message = "An internal error occured!",
                RequestId = context.TraceIdentifier
            });
        }
    }
}

public static class ExceptionMiddlewareExtensions
{
    public static IApplicationBuilder UseExceptionMiddleware(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ExceptionMiddleware>();
    }
}

public class ProblemDetails
{
    public string? Message { get; set; }
    public string? RequestId { get; set; }
}