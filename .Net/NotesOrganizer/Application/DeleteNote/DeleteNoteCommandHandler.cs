using Application.Abstractions;
using Application.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.DeleteNote;

public class DeleteNoteCommandHandler(IApplicationDbContext dbContext, ILogger<DeleteNoteCommandHandler> logger) : IRequestHandler<DeleteNoteCommand>
{
    public async Task Handle(DeleteNoteCommand request, CancellationToken cancellationToken)
    {
        var note = await dbContext.Notes.SingleOrDefaultAsync(x => x.Id == request.NoteId, cancellationToken);

        if (note == null)
        {
            logger.LogWarning("Attempted to delete a note that does not exist. Note ID: {NoteId}", request.NoteId);
            throw new NotFoundException($"Note with ID {request.NoteId} not found.");
        }

        dbContext.Notes.Remove(note);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}